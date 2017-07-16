import '../../stylus/news/newsCard.styl'
import * as api from '../../api/api'
import { mapGetters } from 'vuex'

export default {
  data: function () {
    return {
      keyColor: ['#82ABF9', '#6EB1EF', '#7ADCFC']
    }
  },
  props: ['news'],
  mounted () {
    this.$nextTick(function () {
      const elOffsetLeft = this.$el.offsetLeft
      if (elOffsetLeft === 690 || elOffsetLeft === 370 || elOffsetLeft === 765) {
        this.$el.style.marginLeft = '75px'
      }
    })
  },
  computed: {
    ...mapGetters([
      'getColor'
    ])
  },
  methods: {
    getHotColor (hot) {
      return this.getColor[hot]
    },
    postTracking (data) {
      axios.post(api.userInterestTracking, {
        'data': data
      })
        .then(res => {})
        .catch(error => {
          console.log(error)
        })
    }
  },
  render () {
    const keywords = this.news.keywords.map((keyword, index) => {
      return (
        <span class='keyword' style={{ 'background-color': this.keyColor[index] }}>
          {keyword}
        </span>
      )
    })
    return (
      <div class='news-card'>
        <a href={this.news.url} onClick='this.postTracking(news.title)' target='_blank'>
          <p class='title'>{this.news.title}</p>
        </a>
        <div class='news-card-body'>
          <a href={this.news.url} onClick='this.postTracking(news.title)' target='_blank'>
            <p class='abstract'>{this.news.abstract}</p>
          </a>
          <div class='keywords'>
            {keywords}
          </div>
          <div class='hot-rect' style={{ backgroundImage: this.getHotColor(this.news.hot) }}>
            <p class='hot'>
              {`${this.news.hot}℃`}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
