export const Card = () => {
  return <div className="bg-white shadow-md rounded-lg p-4"></div>;
};

const CardContent = () => {
  return <div className="p-4"></div>;
};

const CardDescription = () => {
  return <p className="text-gray-700"></p>;
};

const CardHeader = () => {
  return <div className="flex items-center justify-between"></div>;
};

const CardTitle = () => {
  return <h2 className="text-lg font-semibold text-gray-900"></h2>;
};

export { CardContent, CardDescription, CardHeader, CardTitle };
