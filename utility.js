/**
 * Global variables:
 */
const clientUtility = {};

/** self involked function */
(function () {
    //creating closeModel method:
    clientUtility.closeModel = (modelCtrl) => {
        try {
            if (modelCtrl.length <= 0) return false;
            let ModelForm = modelCtrl;
            let checkErrorsClass = ModelForm.find('.custom-invalid-feedback');
            if (checkErrorsClass.length > 0) {
                ModelForm.find('.custom-invalid-feedback').addClass('d-none');
                ModelForm.find('.invalid-feedback').remove();
                ModelForm.removeClass('was-validated');
            }
            ModelForm[0].reset();
            return;
        } catch (error) {
            throw error;
        }
    },
        //creating autoFillForm method:
        clientUtility.autoFillForm = (queryObj) => {
            try {
                let { _id, collection, clientUrl, el } = queryObj;
                executeCustomApi({ url: clientUrl, type: 'post', data: { _id, collection } }, function (res) {
                    if (res.status == 'success' && res.data) {
                        let data = res.data;
                        el.find("[data-field]").each(function () {
                            let fieldsName = $(this).attr("data-field");
                            if (data.hasOwnProperty(fieldsName) && data[fieldsName]) {
                                if (fieldsName == "Phone" || fieldsName == "Mobile") {
                                    $(this).val(data[fieldsName]);
                                } else if (fieldsName == "Phone" || fieldsName == "Mobile") {
                                    $(this).val(data[fieldsName]);
                                } else {
                                    $(this).val(data[fieldsName]);
                                }
                            } else {
                                console.log('This fields or property nane doesn\'t exists');
                            }
                        });
                    } else {
                        console.log('data not found');
                    }
                });
            } catch (error) {
                throw error;
            }
        }
})(); //called function:
