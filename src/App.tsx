import React from "react";

let notSure: string = "maybe a string instead";

console.log(notSure.toUpperCase());

interface Props {
  title: string;
}

const JensComponent = ({ title }: Props) => <h1>{title}</h1>;

const App = () => {
  const foo: string = "hello";

  return <JensComponent title={foo} />;
};

export default App;
