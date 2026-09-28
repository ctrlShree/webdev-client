export default function ListTags() {
    return (
        <div id="wd-lists">
            <h4>List Tags</h4>

            <h5>Ordered List Tag</h5>
            How to make pancakes:
            <ol id="wd-pancakes">
                <li>Mix dry ingredients.</li>
                <li>Add wet ingredients.</li>
                <li>Stir to combine.</li>
                <li>Heat a skillet or griddle.</li>
                <li>Pour batter onto the skillet.</li>
                <li>Cook until bubbly on top.</li>
                <li>Flip and cook the other side.</li>
                <li>Serve and enjoy!</li>
            </ol>

            My Favorite Recipe
            <ol id="wd-your-favorite-recipe">
                <li>Boil water and add half tea spoon of tea powder.</li>
                <li>Add one tea spoon of sugar. </li>
                <li>Once the mixture is dark brown, add some milk and let the tea boil.</li>
            </ol>

            <h5>Unordered List Tag</h5>
            My favorite books (in no particular order)
            <ul id="wd-my-books">
                <li>Dune</li>
                <li>Lord of the Rings</li>
                <li>Ender&apos;s Game</li>
                <li>Red Mars</li>
                <li>The Forever War</li>
            </ul>

            My Favorites
            <ul id="wd-your-books">
                <li>Harry Potter</li>
                <li>Atomic Habits</li>
                <li>Demon Slayer: Kimetsu no Yaiba</li>
            </ul>

            <h5>HTML Tags from This Chapter</h5>
            <ul id="wd-ai-html-tags">
                <li>h1–h6 — heading tags for section titles, largest to smallest</li>
                <li>p — paragraph tag that adds vertical spacing around text</li>
                <li>ol — ordered list for sequences where order matters</li>
                <li>ul — unordered list for collections where order doesn&apos;t matter</li>
                <li>table — organizes data into rows and columns</li>
                <li>img — embeds an image via its src attribute</li>
            </ul>
        </div>
    );
}