import { useEffect, useState } from "react";
import {useLocation, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { url } from "../Common/Constant";
import "../Pages_CSS/MainPage.css";

function MainPage() {
  useEffect(() => {
    getElection();
  }, []);

  const [election, setElection] = useState({});
  const history = useHistory();
      

  const getElection = () => {
    axios.get(url + "/Election/" +election.electionId ).then((response) => {
      const result = response.data;
      console.log(result.data);
    });
  };

  const onUpdateElection = () => {
    const data = {
    
    };
    history.push("/home/updateElection", { election: data });
  };

  

 

  return (
    <div class="card-deck mb-3 text-center">
      <div className="row">
        <div className="col-6 px-5">
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Election Service</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <li>
                  <Link to="/home/View-elections" style={{ color: "blue" }}>
                    View Election All elections
                  </Link>
                </li>
                <li
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={onUpdateElection}
                >
                  Update Election
                </li>

               
              </ul>
              <Link to="/home/Election">
                <button type="button" class="btn btn-lg btn-block btn-primary">
                Add Election
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6 px-5">
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Candidate Service</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <li>
                  <Link
                    to="/home/assembly-candidates"
                    style={{ color: "blue" }}
                  >
                    View Assembly Candidates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home/parliament-candidates"
                    style={{ color: "blue" }}
                  >
                    View Parliament Candidates
                  </Link>
                </li>
              </ul>
              <Link to="/home/candidateRegistration">
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-primary mx-1"
                >
                  Assembly
                </button>
              </Link>
              <Link to="/home/ParliamentCandidateRegistration">
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-primary mx-1"
                >
                  Parliament
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 px-5">
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Political Party</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <li>
                  <Link to="/home/view-parties" style={{ color: "blue" }}>
                    View Political Parties
                  </Link>
                </li>
              </ul>
              <Link to="/home/partyRegistration">
                <button type="button" class="btn btn-lg btn-block btn-primary">
                  Party Registration
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6 px-5">
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Data Section</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <li>
                  <Link to="/home/view-elections" style={{ color: "blue" }}>
                    View Elections
                  </Link>
                </li>
                <li>
                  <Link to="/home/view-parliaments" style={{ color: "blue" }}>
                    View Parliaments
                  </Link>
                </li>
                <li>
                  <Link to="/home/view-assembly" style={{ color: "blue" }}>
                    View Assemblies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
