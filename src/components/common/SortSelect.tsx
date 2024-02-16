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
      <div className="flex gap-3 items-center">
      <p className="text-sm text-[#7C7C7C] whitespace-nowrap">Sort By</p>
      <Select>
        <SelectTrigger className="w-auto md:w-full text-[#7C7C7C] text-xs bg-transparent border-[#C6C6C6] ">
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
