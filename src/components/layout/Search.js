import styled from 'styled-components'

const Search = styled.input`
  background-color: white;
  padding: 0.5rem;
  border-radius: 5px;
  width: 250px;
  margin-bottom: 0.8rem;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  &:focus{
    outline: none;
  }    
  @media (max-width: 992px) {
    width: 100%;
    font-size: 18px;
  }
`

export default Search
