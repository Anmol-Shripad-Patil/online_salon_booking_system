const AdminSalon=()=>{
    const[Salons,setSalonsOBJ]=useState([]);
  useEffect(()=>{
   
    fetch("http://localhost:8080/getSalonforAdmin")
    .then(resp=>resp.text())
    .then(text=>text.length ? JSON.parse(text):{})
    .then(obj=> {
    setSalonsOBJ(obj); 
    })
},[]);
 
var count=1;
return(
    <div>
        <table className="table table-bordered">
        <thead>
          <tr>
            <th>{count++}</th>
            <th>Customer </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          
           {/* {customers.map((customer) => ( */}
           
           {
                  customers.map( cust => {
                    return (
                      <tr>
                        
                        <td> {cust.servic.serviceName}</td>
                        
                        <td>{cust.servic.price}</td>
                      </tr>
                    )
                  })
               }
               <tr>
                <td style={{textAlign: 'right'}}>{"Total Price :"}</td>
                <td >{total}</td>
               </tr>
           
           
          
           
        </tbody>
            </table>
    </div>
  )
}