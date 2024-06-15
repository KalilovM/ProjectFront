const SalaryFilter = () => {
  return (
    <div className={"m-0"}>
      <span className={"text-lg font-bold text-white min-w-min m-0"}>Salary</span>
      <div className={"gap-4 grid-flow-row grid "}>
        <div className={"grid-cols-[1fr_64px] grid grid-flow-col gap-2 text-black"}>
          <input type="number" inputMode={"numeric"} className={"w-full min-h-10 min-w-10 rounded-sm border border-transparent px-2"}/>
          <select name="currency" id="currency"
                  className={"flex w-full min-h-10 min-w-10 border border-transparent rounded-sm leading-tight cursor-pointer"}>
            <option value="RUR">₽</option>
            <option value="EUR">€</option>
            <option value="USD">$</option>
            <option value="UAH">₴</option>
            <option value="KZT">₸</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SalaryFilter;