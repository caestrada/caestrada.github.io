
setInterval(() => {
    const avatarImgs = document.querySelectorAll('.avatar-image');
    avatarImgs.forEach((avatarImg) => {
        let classes = avatarImg.className.split(' ');
        classes = (classes[1] === 'avatar-transition-dark')
                    ? [classes[0], 'avatar-transition-light'] 
                    : [classes[0], 'avatar-transition-dark'];
        avatarImg.className = `${classes[0]} ${classes[1]}`;
    });
}, 500);