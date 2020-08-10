import Link from 'next/link';
import avatarImage from '../assets/avatar_image.png';
import avatarImageWebp from '../assets/avatar_image.webp';
import profileImage from '../assets/carlos_estrada.png';
import profileImageWebp from '../assets/carlos_estrada.webp';
import { render } from 'react-dom';

class Navbar extends React.Component {

  componentDidMount() {
    setInterval(() => {
      console.log('...')
      const avatarImgs = document.querySelectorAll('.avatar-image');
      console.log('...', avatarImgs)
      if(avatarImgs) {
        avatarImgs.forEach((avatarImg) => {
          console.log(avatarImg);
          let classes = avatarImg.className.split(' ');
          classes = (classes[1] === 'avatar-transition-dark')
            ? [classes[0], 'avatar-transition-light']
            : [classes[0], 'avatar-transition-dark'];
          avatarImg.className = `${classes[0]} ${classes[1]}`;
        });
      }
    }, 500);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a type="button" data-toggle="modal" data-target="#exampleModal">
          <picture>
            <source type="image/webp" srcSet={avatarImageWebp} />
            <source type="image/png" srcSet={avatarImage} />
            <img className="avatar-image avatar-transition-dark" src={avatarImage} alt="Carlos Estrada's profile picture." />
          </picture>
        </a>
        <Link href="/"><a className="navbar-brand">Carlos Estrada</a></Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/projects"><a className="nav-link">Projects</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/tutorials"><a className="nav-link">Tutorials / Lectures</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/problems"><a className="nav-link">Programming Problems</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/contact"><a className="nav-link">Contact Me</a></Link>
            </li>
          </ul>
        </div>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title" id="exampleModalLabel">Carlos Estrada</h1>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <picture>
                  <source type="image/webp" srcSet={profileImageWebp} />
                  <source type="image/png" srcSet={profileImage} />
                  <img className="profile-image" src={profileImage} alt="Carlos Estrada's profile picture." />
                </picture>
              </div>
              <div className="modal-footer">
                <ul>
                  <li><strong>Software Engineer</strong> and founder of a few tiny startups. Interested in
                  web technologies and machine learning.</li>
                  <li>Currently working as a <strong>Salesforce Developer</strong> at <strong>Ultimate Software</strong>.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal END --> */}
      </nav>
    );
  }
}

export default Navbar;