function button(){
    return 'button';
}

class Slider {
    constructor(widht, height, count) {
        this.widht = widht;
        this.height = height;
        this.count = count
    }
    nestSlide(){
        console.log('Move');
    }

    prevSlide(){
        console.log('Back');
    }

    whoAmI(){
        console.log(`Я толще на ${this.widht},и выше на ${this.height},и мое любимое число ${this.count}`);
    }
}

// const slider = new Slider(100, 200, 10),
//     someSlider = new Slider(150, 250, 1);  

// slider.whoAmI();
// someSlider.whoAmI();

class AutoSlider extends Slider {
    constructor(widht, height, count, auto) {
        super(widht, height, count);
        this.auto = auto;
    }
    play(){
        console.log(`Autoplay: ${this.auto}`);
    }
}

// const slider = new AutoSlider(100, 200, 10, true);

// slider.whoAmI();
// slider.play();

export {Slider,AutoSlider,button}; //экспорт нескольких методов.
export default Slider; //экспорт по умолчанию. Только один по умолчанию



