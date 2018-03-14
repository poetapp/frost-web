import * as ts from 'typescript';
import * as Lint from 'tslint';
import * as path from 'path'

import {ErrorTolerantWalker} from './utils/ErrorTolerantWalker';
import {ExtendedMetadata} from './utils/ExtendedMetadata';

const FAILURE_STRING_EXT: string = 'External module is being loaded from a relative path. Please use an absolute path: ';
const FAILURE_STRING_IMPORT: string = 'Imported module is being loaded from a relative path. Please use an absolute path: ';
const FAILURE_IMPORT_INTO_DIRECTORY: string = 'Imported module is into directory. Please use an relative path: ';
const FAILURE_IMPORT_ROOT_DIRECTORY: string = 'Imported module into root directory. Please use an absolute path: ';

/**
 * Implementation of the no-relative-imports rule.
 */
export class Rule extends Lint.Rules.AbstractRule {

    public static metadata: ExtendedMetadata = {
        ruleName: 'no-relative-imports',
        type: 'maintainability',
        description: 'Do not use relative paths when importing external modules or ES6 import declarations',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Ignored',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        commonWeaknessEnumeration: '710'
    };
    

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new NoRelativeImportsRuleWalker(sourceFile, this.getOptions()));
    }
}

class NoRelativeImportsRuleWalker extends ErrorTolerantWalker {
    protected visitNode(node: ts.Node): void {
        
        if (node.kind === ts.SyntaxKind.ExternalModuleReference) {
            const moduleExpression: ts.Expression = (<ts.ExternalModuleReference>node).expression;
            const checkRule = this.isModuleExpressionValid(moduleExpression)
            if (!checkRule.status) {
                const message = checkRule.message === '' ? FAILURE_STRING_EXT : checkRule.message
                this.addFailureAt(node.getStart(), node.getWidth(), message + node.getText());
            }
        } else if (node.kind === ts.SyntaxKind.ImportDeclaration) {
            const moduleExpression: ts.Expression = (<ts.ImportDeclaration>node).moduleSpecifier;
            const checkRule = this.isModuleExpressionValid(moduleExpression)
            if (!checkRule.status) {
                const message = checkRule.message === '' ? FAILURE_STRING_IMPORT : checkRule.message
                this.addFailureAt(node.getStart(), node.getWidth(), message + node.getText());
            }
        }
        super.visitNode(node);
    }

    private isRelativePath(path: string): boolean {
        return path.substring(0, 2) === './'
    }

    private getBaseUrl(currentPath: string, fileName: string) {
        return fileName.replace(currentPath, '').split('/')[1]
    }

    private getCurrentFile():string {
        const currentPath = process.cwd().toLowerCase()
        const fileName = this.getSourceFile().fileName.toLocaleLowerCase()
        const baseUrl = this.getBaseUrl(currentPath, fileName)
        const projectPath = `${currentPath}/${baseUrl}/`.toLowerCase()
        const customSourcePathFile = fileName.replace(projectPath, '')
        return path.dirname(customSourcePathFile).toLowerCase()
    }

    private isRootDirectory(): boolean {
        return this.getCurrentFile() === '.'
    }

    private isDescendent(module: string): boolean {
        return module.includes(this.getCurrentFile())
    }

    private isUseBeforeDirectory(module: string): boolean {
        const subText = module.substring(0, 2);
        return subText === '..'
    }

    private isModuleExpressionValid(expression: ts.Expression): { status:boolean, message:string } {
        if (expression.kind === ts.SyntaxKind.StringLiteral) {
            const moduleName: ts.StringLiteral = <ts.StringLiteral>expression;
            const moduleNamePath = path.dirname(moduleName.text).toLowerCase()
           
            if (this.isRootDirectory()) {
                return this.isRelativePath(moduleName.text) ? 
                { status: false, message: FAILURE_IMPORT_ROOT_DIRECTORY } : 
                { status: true, message: '' }
            }

            if (!this.isRelativePath(moduleName.text) && this.isDescendent(moduleNamePath)) {
                return { status: false, message: FAILURE_IMPORT_INTO_DIRECTORY }
            }

            if (this.isUseBeforeDirectory(moduleName.text)) {
                return { status: false, message: '' };
            }
        }
        return { status: true, message: '' }
    }
}