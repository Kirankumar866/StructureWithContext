// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configControl">
          <h1>Layout</h1>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="context"
              className="box"
              onChange={onChangeContent}
              checked={showContent}
            />
            <label htmlFor="context" className="label">
              Context
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="left"
              className="box"
              onChange={onChangeLeftNavbar}
              checked={showLeftNavbar}
            />
            <label htmlFor="left" className="label">
              Left Navbar
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="right"
              className="box"
              onChange={onChangeRightNavbar}
              checked={showRightNavbar}
            />
            <label htmlFor="right" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
