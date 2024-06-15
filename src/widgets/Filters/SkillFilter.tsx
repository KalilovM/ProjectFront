
const SkillFilter = () => {
  return (
    <div className={"m-0"}>
      <div className={"mb-4 flex items-baseline flex-wrap"}>
        <span className={"text-lg font-bold text-white min-w-min m-0"}>Skills</span>
        <select name="skill" id="skill" className={"flex w-full min-h-10 min-w-10 border border-transparent rounded-sm leading-tight cursor-pointer px-2"}>
          <option value="Any">Any</option>
          <option value="Any">Rust</option>
          <option value="Any">Python</option>
          <option value="Any">Java</option>
          <option value="Any">Kotlin</option>
          <option value="Any">C++</option>
        </select>
      </div>
    </div>
  );
};

export default SkillFilter;