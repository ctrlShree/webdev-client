export default function Flex() {
    return (
        <div id="wd-css-flex">
            <h2>Flex</h2>
            <div className="wd-flex-row-container">
                <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
                <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
                <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
                    Column 3
                </div>
            </div>
            <div className="wd-flex-row-container">
                <div className="wd-bg-color-green wd-fg-color-white wd-width-110px">
                    My col 1
                </div>
                <div className="wd-bg-color-yellow">My col 2</div>
                <div className="wd-bg-color-blue wd-fg-color-white wd-flex-grow-1">
                    My col 3 (grows)
                </div>
            </div>
            <div id="wd-ai-flex" className="wd-flex-row-container">
                <div className="wd-bg-color-red wd-fg-color-white wd-width-110px">
                    Sample col 1
                </div>
                <div className="wd-bg-color-yellow">Sample col 2</div>
                <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
                    Sample col 3 (grows)
                </div>
            </div>
        </div>
    );
}