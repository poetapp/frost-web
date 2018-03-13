"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ts = require("typescript");
var Lint = require("tslint");
var path = require("path");
var ErrorTolerantWalker_1 = require("./utils/ErrorTolerantWalker");
var FAILURE_STRING_EXT = 'External module is being loaded from a relative path. Please use an absolute path: ';
var FAILURE_STRING_IMPORT = 'Imported module is being loaded from a relative path. Please use an absolute path: ';
var FAILURE_IMPORT_INTO_DIRECTORY = 'Imported module is into directory. Please use an relative path: ';
var FAILURE_IMPORT_ROOT_DIRECTORY = 'Imported module into root directory. Please use an absolute path: ';
/**
 * Implementation of the no-relative-imports rule.
 */
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new NoRelativeImportsRuleWalker(sourceFile, this.getOptions()));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
Rule.metadata = {
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
exports.Rule = Rule;
var NoRelativeImportsRuleWalker = (function (_super) {
    __extends(NoRelativeImportsRuleWalker, _super);
    function NoRelativeImportsRuleWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoRelativeImportsRuleWalker.prototype.visitNode = function (node) {
        if (node.kind === ts.SyntaxKind.ExternalModuleReference) {
            var moduleExpression = node.expression;
            var checkRule = this.isModuleExpressionValid(moduleExpression);
            if (!checkRule.status) {
                var message = checkRule.message === '' ? FAILURE_STRING_EXT : checkRule.message;
                this.addFailureAt(node.getStart(), node.getWidth(), message + node.getText());
            }
        }
        else if (node.kind === ts.SyntaxKind.ImportDeclaration) {
            var moduleExpression = node.moduleSpecifier;
            var checkRule = this.isModuleExpressionValid(moduleExpression);
            if (!checkRule.status) {
                var message = checkRule.message === '' ? FAILURE_STRING_IMPORT : checkRule.message;
                this.addFailureAt(node.getStart(), node.getWidth(), message + node.getText());
            }
        }
        _super.prototype.visitNode.call(this, node);
    };
    NoRelativeImportsRuleWalker.prototype.isRelativePath = function (path) {
        return path.substring(0, 2) === './';
    };
    NoRelativeImportsRuleWalker.prototype.getCurrentFile = function () {
        var baseUrl = '/src/';
        var currentPath = process.cwd().toLowerCase();
        var projectPath = ("" + currentPath + baseUrl).toLowerCase();
        var customSourcePathFile = this.sourceFile.path.replace(projectPath, '');
        return path.dirname(customSourcePathFile).toLowerCase();
    };
    NoRelativeImportsRuleWalker.prototype.isRootDirectory = function () {
        return this.getCurrentFile() === '.';
    };
    NoRelativeImportsRuleWalker.prototype.isDescendent = function (module) {
        return module.includes(this.getCurrentFile());
    };
    NoRelativeImportsRuleWalker.prototype.isUseBeforeDirectory = function (module) {
        var subText = module.substring(0, 2);
        return subText === '..';
    };
    NoRelativeImportsRuleWalker.prototype.isModuleExpressionValid = function (expression) {
        if (expression.kind === ts.SyntaxKind.StringLiteral) {
            var moduleName = expression;
            var moduleNamePath = path.dirname(moduleName.text).toLowerCase();
            if (this.isRootDirectory()) {
                return this.isRelativePath(moduleName.text) ?
                    { status: false, message: FAILURE_IMPORT_ROOT_DIRECTORY } :
                    { status: true, message: '' };
            }
            if (!this.isRelativePath(moduleName.text) && this.isDescendent(moduleNamePath)) {
                return { status: false, message: FAILURE_IMPORT_INTO_DIRECTORY };
            }
            if (this.isUseBeforeDirectory(moduleName.text)) {
                return { status: false, message: '' };
            }
        }
        return { status: true, message: '' };
    };
    return NoRelativeImportsRuleWalker;
}(ErrorTolerantWalker_1.ErrorTolerantWalker));
