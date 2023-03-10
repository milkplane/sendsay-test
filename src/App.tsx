import Layout from './common/components/Layout';
import ConstructionArea from './features/construction/ConstructionArea';
import ConstructiorSwitch from './features/construction/ConstructorSwitch';



function App() {
  return (
    <Layout switch={<ConstructiorSwitch />} constructionArea={<ConstructionArea />}/>
  );
}

export default App;
