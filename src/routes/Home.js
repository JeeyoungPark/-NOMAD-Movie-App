import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

// class component는 class이며, react component로부터 확장된다.
// react는 자동적으로 class component의 render method를 실행한다.
// state는 object이다.
// state에는 바꾸고 싶은 data를 넣는다. default값을 선언하는 것
// button에는 onClick이라는 prop이 기본적으로 있다.
// this.add()에서 ()는 즉시 함수를 호출해라는 것이고,
// this.add는 click했을 때만 함수를 호출하는 것이다.

//setState를 호출할 때마다 새로운 state로 render메서드를 호출한다.

//life cycle component : 리액트가 component를 생성하는 없애는 방법
//생성: constructor -> render -> componentDidMount
//업데이트: setState호출 -> render -> componentDidUpdate
//죽음: componentWillUnmounting

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className='container'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'>'Loading...'</span>
          </div>
        ) : (
          <div className='movie'>
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
