interface Props {
  categories: string[];
  onChange: (id: string) => void;
}

const FilterExpense = ({ categories, onChange }: Props) => {
  return (
    <div className="mb-6">
      <label htmlFor="category"></label>
      <select
        onChange={(event) => onChange(event.target.value)}
        id="category"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <optgroup>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};

export default FilterExpense;
