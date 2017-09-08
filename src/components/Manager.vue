<template>
  <Row>
    <Col>
    <Breadcrumb>
      <Breadcrumb-item href="/manager/add">添加图书</Breadcrumb-item>
      <Breadcrumb-item href="/manager/update">修改图书</Breadcrumb-item>
      <Breadcrumb-item href="/manager/delete">删除图书</Breadcrumb-item>
    </Breadcrumb>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    </Col>
  </Row>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'Manager',
    data () {
      return {
        transitionName: ''
      }
    },
    computed: {
      ...mapGetters({
        books: 'books'
      }),
      bookDetail(){
        let bId = this.$router.params.id;
        return this.books.find(function (item) {
          return item.id === bId
        })
      }
    },
    watch: {
      '$router' (to, from){
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
      }
    }
  }
</script>

<style>
  .bookimg {
    height: 200px;
  }

  .text {
    text-align: center;
  }

  .listContainer {
    padding-top: 30px;
  }
</style>
