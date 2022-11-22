import { useHistory } from 'react-router-dom';
import { url } from '../../../Common/Constant';
import axios  from 'axios';
const ElectionRow = ({ election }) => {

    const {
      electionId,
      electionName,
      year,
      electionDate,
      resultDate,
      state,
    } = election;
    const history = useHistory();
    const onUpdateElection = (election) => {
      history.push("/home/update-Election",{election:election})
    };
    const deleteElection =(election)=>{
      console.log(election)
    
     axios.delete(url +'election/deleteelection/'+election.electionId)
        alert("Election id"+election.electionId +"   is removed"  )
        
    }
  
    return (
      <tr>
        <td>{electionId}</td>
        <td>{electionName + " - " + year}</td>
        <td>{electionDate}</td>
        <td>{resultDate}</td>
        <td>{state}</td>
         <td><input type="btn btn-success" value="update" onClick={() => {
            onUpdateElection(election);
          }}

          /></td>
                   <td><input type="btn btn-success" value="Delete" onClick={() => {
           deleteElection(election);
           
          }}

          /></td>
      </tr>
    );
  };
  
  export default ElectionRow;
  