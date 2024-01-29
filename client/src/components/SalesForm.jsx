import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row,Stack,Col} from 'react-bootstrap';
import SelectContainer from './SelectContainer.jsx';


function SalesForm() {
    const [hotItems, setHotItems]=useState([]);
    const [trendingItems, setTrendingItems]=useState([]);
    const [seasonalFavorites, setSeasonalFavorites]=useState([]);
    //useEffect to get hot items from the function getCategoryItems and set hotItems

    /*useEffect(() => {
        const fetchHotItems = async () => {
          const items = await getCategoryItems();
          setHotItems(items);
        };
    
        fetchHotItems();
      }, []); 

    useEffect(() => {
        getCategoryItems().then((res) => {
            setHotItems(res);
        });
    }, []);*/
    const onSubmit = (event) => {
        event.preventDefault();
        console.log('Submit hotItems: ', hotItems);
    }

    const getOptionsView = (items) =>{
        return <Stack className="mt-2" direction="horizontal" gap={2}>
            {items.map(item => <Button color='black' key={item}>{item}</Button>)}
        </Stack>
        
        //return (<Button>a</Button>);
    };
    

    return (
        <Form className="m-5" onSubmit={onSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Mobile" />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridCell">
              <Form.Label>Cell Phone</Form.Label>
              <Form.Control type="number" placeholder="Cell Phone" />
            </Form.Group>
          </Row>
    
          
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
          </Form.Group>
          </Row>
          

          <Row className="mb-3">
            
            
            <Form.Group as={Col} controlId="formHotItems">
                <SelectContainer label="Hot Items" items={hotItems} updateItems={setHotItems} id={45} category='hotItems' />
            </Form.Group>

            <Form.Group as={Col} controlId="formTrendingItems">
              <SelectContainer label="Trending Items" items={trendingItems} updateItems={setTrendingItems} id={45} category='trendingItems' />
            </Form.Group>

            <Form.Group as={Col} controlId="formTrendingItems">
              <SelectContainer label="Seasonal Favourites" items={seasonalFavorites} updateItems={setSeasonalFavorites} id={45} category='seasonalFavorites' />
            </Form.Group>
    

           
            
            
             {/*<Form.Group as={Col} controlId="formGridState">
                <Form.Label>Hot Items</Form.Label>
                <Form.Control type="text" placeholder="Enter SKU"  list="datalistOptions" id="exampleDataList"/>
                <datalist id="datalistOptions">
                    {skuOptions}
                </datalist>
                <SelectSearch id="hotItemsSelect" sx={{ width:"100%"}} options={options} value="sv" name="language" placeholder="Choose your language" search="true" onChange={handleHotItems}/>
                {getOptionsView(hotItems)}
            </Form.Group>*/}
          </Row>

          {/*<Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>*/}
    
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
}

export default SalesForm;