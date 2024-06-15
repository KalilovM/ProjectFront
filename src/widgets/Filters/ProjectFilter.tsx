const ProjectFilter = () => {
  return (
    <div className="rounded-sm bg-gray-700">
      <div className={"pt-7 px-6 pb-3 flex justify-between items-center"}>
        <h1 className={"m-0 break-words text-2xl font-bold leading-tight text-white"}>Teams and Projects</h1>
        <button className={"border-none rounded-sm bg-blue-500 text-white font-bold py-1.5 px-2.5 leading-tight outline-none text-sm"}>Subscribe</button>
      </div>
      <div className={"pt-0 pb-8 relative px-6"}>
        <div className={"border-t border-blue-400/20 font-base"}>
          <div className={"mt-3 flex flex-row"}>
            <span>
              <input type="text"/>
              {/* Search button*/}
              {/*TODO: load icon pack*/}
              {/*<button>*/}
              {/*  <img src="" alt=""/>*/}
              {/*</button>*/}
            </span>
            <select name="search" id="search">
              <option value="relevance">По соответствию</option>
              <option value="date">По дате размещения</option>
              <option value="salary_desc">По убыванию зарплаты</option>
              <option value="salary_asc">По возрастанию зарплаты</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;