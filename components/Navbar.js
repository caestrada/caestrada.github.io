import Link from 'next/link';
import avatarImage from '../orig/assets/avatar_image.png';
import avatarImageWebp from '../orig/assets/avatar_image.webp';
import profileImage from '../orig/assets/carlos_estrada.png';
import profileImageWebp from '../orig/assets/carlos_estrada.webp';

const Navbar = () => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a type="button" data-toggle="modal" data-target="#exampleModal">
      <picture>
        <source type="image/webp" srcset={avatarImageWebp} />
        <source type="image/png" srcset={avatarImage} />
        <img class="avatar-image avatar-transition-dark" src={avatarImage} alt="Carlos Estrada's profile picture." />
      </picture>
    </a>
    <Link href="/"><a class="navbar-brand">Carlos Estrada</a></Link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <Link href="/projects"><a class="nav-link">Projects</a></Link>
        </li>
        <li class="nav-item">
          <Link href="/tutorials"><a class="nav-link">Tutorials / Lectures</a></Link>
        </li>
        <li class="nav-item">
          <Link href="/problems"><a class="nav-link">Programming Problems</a></Link>
        </li>
        <li class="nav-item">
          <Link href="/contact"><a class="nav-link">Contact Me</a></Link>
        </li>
      </ul>
    </div>

    {/* <!-- Modal --> */}
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">Carlos Estrada</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <picture>
              <source type="image/webp" srcset={profileImageWebp} />
                <source type="image/png" srcset={profileImage} />
                  <img class="profile-image" src={profileImage} alt="Carlos Estrada's profile picture." />
          </picture>
        </div>
              <div class="modal-footer">
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

export default Navbar;