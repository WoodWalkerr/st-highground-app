import React  from 'react'

const PageTab = ({ tabs, activeTab, setActiveTab }) => {

    return (
        <div>
            <div className="border-b border-gray-200">
                <nav className="flex" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`${
                                activeTab === tab
                                    ? 'border-green-500 text-green-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            } whizz mr-4 py-2 border-b-2 font-medium text-sm focus:outline-none`}
                            onClick={() => setActiveTab(tab)}
                            aria-current={
                                activeTab === tab ? 'page' : undefined
                            }
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default PageTab
