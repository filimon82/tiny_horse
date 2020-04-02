var slideshow = {
    photoList: ['charlotte', 'statesville', 'huntersville', 'moncroe',],
    currentPhotoIndex: 0,
    nextPhoto: function() {
        if(this.currentPhotoIndex < this.photoList.length) {
            console.log('currentPhoto is: '+ this.photoList[this.currentPhotoIndex]);
            this.currentPhotoIndex++;
        } else {
            console.log('End of Slideshow');
            this.pause();
        }
    },
    prevPhoto: function() {
        if(this.currentPhotoIndex > this.photoList.length) {
            console.log('currentPhoto is: ' + this.photoList[this.currentPhotoIndex]);
            this.currentPhotoIndex--;
        } else {
            console.log('Start of Slideshow');
        }
    },
    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];  
    },
    playInterval: null,
    play: function() {
        var self = this;
        this.playInterval = setInterval(function() {
            self.nextPhoto()
        }, 2000)
        return slideshow.nextPhoto();
    },
    pause: function() {
        clearInterval(this.playInterval);
    }
}
slideshow.play();