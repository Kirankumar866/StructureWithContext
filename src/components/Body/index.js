// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showRightNavbar, showLeftNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="bodyleftnav-container">
              <h3>Left Navbar Menu</h3>
              <ul className="list-item">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="bodycontent-container">
              <h3>Content</h3>
              <p>
                Lorem Ipsum dolor sit almet fdveczwdevrcad2vcwx fe3fcwsd2 cecwx2
                vvrew23 cwwd32 cd2x223 hth5ju dr54h7rg54
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="bodyrightnav-container">
              <h3>Right Navbar</h3>
              <div className="box-container">
                <div className="box1">
                  <h2>Ad1</h2>
                </div>
                <div className="box1">
                  <h2>Ad2</h2>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
