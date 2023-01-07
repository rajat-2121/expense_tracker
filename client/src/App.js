import './App.css';
import Graphs from './components/graphs';
import Form from './components/form';
function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounder">Expense Tracker</h1>
        {/* Grid Columns */}
        <div className="grid md:grid-cols-2 gap-4">
        {/* Chart */}
        <Graphs />
        <Form /> 
        </div>
      </div>
    </div>
  );
}

export default App;
