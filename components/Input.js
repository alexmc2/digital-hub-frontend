const Input = ({ disabled = false, className, ...props }) => (
  <input
    disabled={disabled}
    className={`${className} rounded-md shadow-sm bg-slate-200 dark:bg-slate-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 dark:focus:border-slate-500 focus:border-sky-300 focus:ring focus:ring-sky-200 dark:focus:ring-slate-500 focus:ring-opacity-50`}
    {...props}
  />
);

export default Input
