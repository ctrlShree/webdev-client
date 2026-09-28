export default function Images() {
    return (
        <div id="wd-images">
            <h4>Image tag</h4>
            Loading an image from the internet:
            <br />
            <img
                id="wd-starship"
                width="400px"
                alt="Starship"
                src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
            />
            <br />
            Loading a local image:
            <br />
            <img
                id="wd-teslabot"
                src="/images/teslabot.jpg"
                height="200px"
                alt="Tesla Bot (Optimus) humanoid robot"
            />
            <br />
            <br />
            Sample image from a public source:
            <br />
            <img
                id="wd-ai-image"
                src="https://picsum.photos/id/1043/200/150"
                width="200px"
                alt="A sample public domain landscape photograph"
            />
            <br />
            Something I like:
            <br />
            <img
                id="wd-your-image"
                src="https://media.designrush.com/inspiration_images/1060341/conversions/GTA-LOGO-Design-Editorial-1-desktop-webp.webp"
                width="300px"
                alt="GTA-VI logo"
            />
        </div>
    );
}