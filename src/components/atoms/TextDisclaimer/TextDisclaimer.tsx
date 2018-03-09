import * as classNames from 'classnames'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'

interface TextDisclaimerProps extends ClassNameProps {}

export const TextDisclaimer = (props: TextDisclaimerProps) => (
  <div className={classNames('TextDisclaimer', props.className)}>
    <p>
      Access to the Po.et API is provided to you free of charge, subject to the
      Website Terms of Use, to allow you to access the Po.et Blockchain. You
      acknowledge that the the API and the Po.et software are still under active
      development and testing and that the functionality is not ready for public
      use. Use the Po.et API and functionality at your own risk. THE API AND
      RELATED SOFTWARE ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      USE OR OTHER DEALINGS IN THE SOFTWARE.
    </p>
  </div>
)
