import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import styled from 'styled-components';

const DetailPage = () => {
  let { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `/movie/${movieId}`
      )
      // console.log('response',response);
      setMovie(response.data);
    }
    fetchData();
  }, [movieId])

  if (!movie) return null;

  return (
    <section>
      <img
        className='modal__poster-img'
        src={movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : ''}
        alt="img"
      />
      <Container>
        <Title>
          {movie.title || movie.name || movie.original_name}
        </Title>
        <Desc>
          {movie?.overview}
        </Desc>
      </Container>
    </section>
  )
}

export default DetailPage

const Container = styled.div`
  margin-left: 40px;
  padding-top: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.5rem;
`;

const Desc = styled.p`
  width: 45rem;
  line-height: 1.3;
  font-weight: 500;
  font-size: 1rem;
  height: 80px;
`;