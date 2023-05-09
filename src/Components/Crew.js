import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Input, Button, Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';
import "../style/crew.css";
const BASE_URL = 'https://safefiles.defiyield.info/safe/files/audit/pdf/';
const RESULTS_PER_PAGE = 10;

const App = () => {
  const [query, setQuery] = useState('');
  const [auditLinks, setAuditLinks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchAuditLinks = async () => {
      const response = await axios.get(BASE_URL);
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(response.data, 'text/html');

      const links = htmlDoc.getElementsByTagName('a');
      const parsedAuditLinks = [];

      for (const link of links) {
        const href = link.getAttribute('href');
        if (href.endsWith('.pdf')) {
          parsedAuditLinks.push({ title: href, url: `${BASE_URL}${href}` });
        }
      }

      setAuditLinks(parsedAuditLinks);
    };

    fetchAuditLinks();
  }, []);

  const searchAuditLinks = (query) => {
    const queryTokens = new Set(query.toLowerCase().split(' '));
    const matchingLinks = [];

    for (const link of auditLinks) {
      const titleTokens = new Set(link.title.toLowerCase().split('_'));
      if (new Set([...queryTokens].filter(x => titleTokens.has(x))).size > 0) {
        matchingLinks.push(link);
      }
    }

    setSearchResults(matchingLinks);
  };

  const handleSearch = () => {
    searchAuditLinks(query);
    setCurrentPage(1);
  };

  return (
    <Container className="">
    <Col>
      <h3>Audit Search</h3>
      <p className='crew-text'> Search for audits that were done within the blockchain ecosystem</p>
      <Input className='search-container' type="text" placeholder="search" onChange={(e) => setQuery(e.target.value)} />
      <Button className="search-input" onClick={handleSearch}>Search</Button>
      {searchResults.length > 0 && (
        <>
          <h2>Found {searchResults.length} audit(s) matching '{query}':</h2>
          <Pagination className='pagination'>
            {[...Array(Math.ceil(searchResults.length / RESULTS_PER_PAGE))].map((_, i) => (
              <PaginationItem className='pagination-item' key={i} active={i + 1 === currentPage}>
                <PaginationLink className="pagination-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</PaginationLink>
              </PaginationItem>
            ))}
          </Pagination>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Audit</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.slice((currentPage - 1) * RESULTS_PER_PAGE, currentPage * RESULTS_PER_PAGE).map((result, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1 + (currentPage - 1) * RESULTS_PER_PAGE}</th>
                  <td>
                    <a href={result.url} target="_blank" rel="noreferrer">{result.title}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
      </Col>
    </Container>
);
};

export default App;