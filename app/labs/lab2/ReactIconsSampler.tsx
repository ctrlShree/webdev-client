import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi2";

export default function ReactIconsSampler() {
    return (
        <div id="wd-react-icons-sampler" className="mb-4 font-sans">
            <h2 className="text-lg font-semibold">React Icons Sampler</h2>
            <div className="flex gap-3 text-3xl">
                <VscAccount />
                <AiOutlineDashboard />
                <FaBookBible />
                <FaCalendar />
                <FaEnvelopeOpenText />
                <FaRegClock />
                <MdOutlineEmojiEvents className="text-blue-600" />
                <HiOutlineAcademicCap className="text-4xl text-blue-600" />
            </div>
        </div>
    );
}