import { User } from "lucide-react";
import { Separator } from "../ui/separator";

const Ribbon = () => {
  return (
    <div className="flex justify-between bg-primary p-2 text-[0.9rem] font-semibold text-gray-300 md:px-8">
      <div className="flex gap-4">
        <div className="flex gap-2">
          <span className="text-gray-400">Phone:</span>
          <span className="cursor-pointer font-bold transition hover:text-white">
            02348993
          </span>
        </div>
        <Separator orientation="vertical" className="bg-gray-400" />
        <div className="flex gap-2">
          <span className="text-gray-400">Email:</span>
          <span className="cursor-pointer font-bold transition hover:text-white">
            infoyemen@aambfs.org
          </span>
        </div>
      </div>
      <div className="flex cursor-pointer items-center gap-2 transition hover:text-white">
        <User />
        <span>Log In</span>
      </div>
    </div>
  );
};

export default Ribbon;
