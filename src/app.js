import './app.css';
import Navigation from './components/navigation'
import Footer from './components/footer'
import Content from './components/content'

function App() {
  return (
    <div className="Portfolio">
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}

export default App;