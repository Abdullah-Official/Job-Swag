import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SortSelect = () => {
  return (
    <div>
      <div className="flex gap-5 items-center">
      <p className="text-sm text-[#7C7C7C] whitespace-nowrap 2xl:text-[18px] font-[400]">Sort By</p>
      <Select>
        <SelectTrigger className="w-auto md:w-full py-4 2xl:py-7 px-3 text-[#7C7C7C] 2xl:text-[18px] font-[500] text-xs bg-transparent border-[#C6C6C6] ">
          <SelectValue placeholder={"Recent Added"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    </div>
  );
};

export default SortSelect;
