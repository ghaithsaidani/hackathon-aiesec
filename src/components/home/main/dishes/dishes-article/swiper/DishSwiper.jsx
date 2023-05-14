import {SwiperSlide,Swiper} from "swiper/react";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {DishCard} from "../dish-card/DishCard.jsx";
import {EffectCoverflow, Navigation, Pagination} from "swiper";

export const DishSwiper = (props) => {
	return (
		<Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={false}
      slidesPerView={6}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth:  150,
        slideShadows: false,
        modifier:  2,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}

      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >

      {props.dishes.map((dish) => (
        <SwiperSlide key={dish.title}>
          <DishCard {...dish} />
        </SwiperSlide>
      ))}
    </Swiper>
	)
}