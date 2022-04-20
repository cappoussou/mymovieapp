

const MoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movie.find(m => m.id === parseInt(id, 10));

  if (!movie) {
    navigate('/');
    return null;
  }  
 