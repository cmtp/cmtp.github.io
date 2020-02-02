export default ({
    Vue,
    options
}) => {
    import('vue-toastr').then(module => {
        Vue.use(module.default, {
            duration: 6000
        });
    })
    .catch(error => {
        console.log(error);
    })
}