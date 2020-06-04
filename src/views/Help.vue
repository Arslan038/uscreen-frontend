<template>
    <div class="help">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" />
            </div>
        </div>
        <div class="row px-5">
            <div class="col-md-6 offset-md-3 col-12 my-5 text-center">
                <h4 class="text-head"><strong>Help Desk</strong></h4>
                <p class="text-gray mt-4 px-5">Please fill in the following information in order to submit a ticket to our help desk. We will get back to you as soon as possible.</p>
                <select class="form-control mt-3">
                    <option :value="null">Input Subject</option>
                    <option value="">Subject 1</option>
                    <option value="">Subject 2</option>
                </select>
                <textarea class="form-control mt-3" style="resize:none" cols="30" rows="6" placeholder="Input Description*"></textarea>
                <button class="btn btn-primary mt-4">Submit</button> <br>
                <button class="btn btn-secondary mt-4">Back</button>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
export default {
  name: "Help",
  components: {
    Breadcrumb
  },
  data() {
    return {
      items: [
        {
            text: 'Home',
            active: false,
            to: '/'
        },
        {
            text: 'Help Desk',
            active: true,
            to: '/help'
        }
      ],
    }
  },
  created() {
      window.scrollTo(0,0)
  }
}
</script>

<style scoped>
p {
    font-size: 16px;
}
.btn-primary {
    padding: 10px 100px;
}
.btn-secondary {
    padding: 10px 100px;
}
</style>