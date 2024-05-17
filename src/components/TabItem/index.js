// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const result = isActive ? 'tab-button activate' : 'tab-button'
  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={result}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
