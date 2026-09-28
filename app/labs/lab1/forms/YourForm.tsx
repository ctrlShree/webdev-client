export default function YourForm() {
    return (
        <>
            <h4>Student Profile</h4>
            <form id="wd-your-form">
                <label htmlFor="wd-your-first-name">First name:</label>
                <input
                    type="text"
                    placeholder="Jane"
                    defaultValue="Shreyash"
                    id="wd-your-first-name"
                />
                <br />
                <label htmlFor="wd-your-last-name">Last name:</label>
                <input
                    type="text"
                    placeholder="Doe"
                    defaultValue="Sawant"
                    id="wd-your-last-name"
                />
                <br />
                <label htmlFor="wd-your-student-id">Student ID:</label>
                <input
                    type="password"
                    placeholder="002598621"
                    id="wd-your-student-id"
                />
                <br />
                <br />

                <label htmlFor="wd-your-bio">Bio:</label>
                <br />
                <textarea
                    id="wd-your-bio"
                    cols={40}
                    rows={5}
                    defaultValue="I'm a Computer Science student at Khoury College, currently working toward a career in full-stack web development. I'm excited to build real applications with React, Next.js, and MongoDB this semester."
                />
                <br />
                <br />

                <label>Class standing:</label>
                <br />
                <input
                    type="radio"
                    name="your-standing"
                    id="wd-your-standing-freshman"
                />
                <label htmlFor="wd-your-standing-freshman">Freshman</label>
                <br />
                <input
                    type="radio"
                    name="your-standing"
                    id="wd-your-standing-sophomore"
                />
                <label htmlFor="wd-your-standing-sophomore">Sophomore</label>
                <br />
                <input
                    type="radio"
                    name="your-standing"
                    id="wd-your-standing-junior"
                />
                <label htmlFor="wd-your-standing-junior">Junior</label>
                <br />
                <input
                    type="radio"
                    name="your-standing"
                    id="wd-your-standing-senior"
                />
                <label htmlFor="wd-your-standing-senior">Senior</label>
                <br />
                <input
                    type="radio"
                    name="your-standing"
                    id="wd-your-standing-graduate"
                    defaultChecked
                />
                <label htmlFor="wd-your-standing-graduate">Graduate</label>
                <br />
                <br />

                <label>Enrollment type:</label>
                <br />
                <input
                    type="radio"
                    name="your-enrollment"
                    id="wd-your-enrollment-fulltime"
                    defaultChecked
                />
                <label htmlFor="wd-your-enrollment-fulltime">Full-time</label>
                <br />
                <input
                    type="radio"
                    name="your-enrollment"
                    id="wd-your-enrollment-parttime"
                />
                <label htmlFor="wd-your-enrollment-parttime">Part-time</label>
                <br />
                <br />

                <label>Interests:</label>
                <br />
                <input
                    type="checkbox"
                    name="your-interests"
                    id="wd-your-interest-webdev"
                    defaultChecked
                />
                <label htmlFor="wd-your-interest-webdev">Web Development</label>
                <br />
                <input
                    type="checkbox"
                    name="your-interests"
                    id="wd-your-interest-ai"
                    defaultChecked
                />
                <label htmlFor="wd-your-interest-ai">Artificial Intelligence</label>
                <br />
                <input
                    type="checkbox"
                    name="your-interests"
                    id="wd-your-interest-gaming"
                />
                <label htmlFor="wd-your-interest-gaming">Game Development</label>
                <br />
                <input
                    type="checkbox"
                    name="your-interests"
                    id="wd-your-interest-security"
                />
                <label htmlFor="wd-your-interest-security">Cybersecurity</label>
                <br />
                <br />

                <label htmlFor="wd-your-major">Major:</label>
                <br />
                <select id="wd-your-major" defaultValue="CS">
                    <option value="CS">Computer Science</option>
                    <option value="DS">Data Science</option>
                    <option value="CE">Computer Engineering</option>
                    <option value="IT">Information Technology</option>
                </select>
                <br />
                <br />

                <label htmlFor="wd-your-topics">
                    Topics I want to deepen this term:
                </label>
                <br />
                <select
                    multiple
                    id="wd-your-topics"
                    defaultValue={["REACT", "NEXTJS"]}
                >
                    <option value="REACT">React</option>
                    <option value="NEXTJS">Next.js</option>
                    <option value="MONGODB">MongoDB</option>
                    <option value="TYPESCRIPT">TypeScript</option>
                    <option value="TAILWIND">Tailwind CSS</option>
                </select>
                <br />
                <br />

                <label htmlFor="wd-your-email">School email:</label>
                <input
                    type="email"
                    placeholder="jdoe@university.edu"
                    defaultValue="sawant.shrey@northeastern.edu"
                    id="wd-your-email"
                />
                <br />
                <label htmlFor="wd-your-grad-year">Expected graduation year:</label>
                <input
                    type="number"
                    defaultValue={2028}
                    min={2024}
                    max={2032}
                    id="wd-your-grad-year"
                />
                <br />
                <label htmlFor="wd-your-start-date">Program start date:</label>
                <input
                    type="date"
                    defaultValue="2026-09-09"
                    id="wd-your-start-date"
                />
                <br />
                <label htmlFor="wd-your-excitement">
                    How excited are you about this course (0–10)?
                </label>
                <br />
                <input
                    type="range"
                    defaultValue={10}
                    min={0}
                    max={10}
                    id="wd-your-excitement"
                />
                <br />
                <br />

                <button id="wd-your-save" type="submit">
                    Save
                </button>
                <button id="wd-your-cancel" type="button">
                    Cancel
                </button>
            </form>
        </>
    );
}