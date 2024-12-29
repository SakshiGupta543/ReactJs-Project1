import logo from './logo.jpeg';
import th from './th.jpeg';
import pic from './pic.jpeg'; 
import picture from './picture.jpeg';
import './Nav.css';
function Nav()
{
    return(
   <>
    <div className='Nav'>
        
    <pre>
        <ul>
        <li><a class="active" href="https://www.flipkart.com/home-improvement/link~brand/pr?sid=h1m">Electronics</a></li>
        <li><a  href="https://www.flipkart.com/home-improvement/link~brand/pr?sid=h1m">TVs & Appliances</a></li>
        <li><a  href="https://www.flipkart.com/home-improvement/link~brand/pr?sid=h1m">Home & Furniture</a></li>
        <li><a  href="https://www.flipkart.com/home-improvement/link~brand/pr?sid=h1m">Sports,Books & More</a></li>
    </ul>
    </pre>
    
        <img src={logo} className="Nav-logo" alt="Nav-logo"></img>
    
    <pre>
    </pre><p>The Flipkart Group is one of India's leading digital commerce entities and includes group companies Flipkart, Myntra, Flipkart Wholesale, Flipkart Health+ and Cleartrip. The Group is also a majority shareholder in PhonePe, one of the leading Payments Apps in India.

                    Started in 2007, Flipkart has enabled millions of consumers, sellers, merchants, and small businesses to be a part of India's digital commerce revolution, with a registered customer base of more than 400 million, offering over 150 million products across 80+ categories. Our efforts to democratize commerce in India, drive access and affordability, delight customers, create lakhs of jobs in the ecosystem, and empower generations of entrepreneurs and MSMEs have inspired us to innovate on many industry firsts. Flipkart is known for pioneering services such as Cash on Delivery, No Cost EMI and easy returns – customer-centric innovations have made online shopping more accessible and affordable for millions of Indians. Together with its group companies, Flipkart is committed to transforming commerce in India through technology.

                    With Catapult, Flipkart aims to provide an umbrella solution to a budding brand's financing & marketing needs. The program offers marketing solutions and capital for new age direct-to-consumer brands to leapfrog into their next phase of growth. The offering goes beyond financing the brands by providing creative services and effective acquisition cost reduction solutions.</p>
               
     <table border='1' align="center">
             <tr>
             <th className='a'>Particular</th>
             <th className='a'>Frequency</th>
             <th className='a'>Percentage</th>
             </tr>
            
             <tr>
            <td className='a1'>For Attractive Prices</td>
            <td className='a1'>17</td>
            <td className='a1'>42.50%</td>
            </tr>
                            
            <tr>
            <td className='a2'>For Reliability</td>
            <td className='a2'>05</td>
            <td className='a2'>12.50%</td>
            </tr>
            
            <tr>
            <td className='a3'>For Mass Variety of products</td>
            <td className='a3'>07</td>
            <td className='a3'>17.50%</td>
            </tr>
                           
             <tr>
            <td className='a4'>For Popularity</td>
            <td className='a4'>11</td>
            <td className='a4'>27.50%</td>
            </tr>
                           
             <tr>
             <td className='a5'>Grand Total</td>
             <td className='a5'>40</td>
             <td className='a5'>100.00%</td>
             </tr>
    </table>
   
   <div className='container'>
            <h1 align="center">Registration Form</h1>
            <h3 align="center">Be the first  one to get  an invite when we open  up registrations !</h3>
        
             <form align="center">
                 Name : <input type="text"></input> <br></br><br></br>
                Email-Id : <input type="text"></input> <br></br><br></br>
                 Mobile Number : <input type="text"></input> <br></br><br></br>
                <input type="button" value="Submit"></input> <input type="button" value="Reset"></input>
            </form>
     </div> <br></br><br></br>

     <h1>Offers Gallary</h1>         
        <img src={th}className="b-th" alt="b-th"></img>
        <img src={pic} className="b1-pic" alt="b1-pic"></img>
        <img src={picture}className="b2-picture" alt="b2-picture" ></img>
   
    </div>
   </> 
    )
            
}
       
    export default Nav;