import request from '../http/request';

export default {
    oneAction: data => {
      return request.save(`/example=${data.page}&size=${data.size}`, data.filters);
    },
    multipleActions: id => {
      return request.remove(`/example/${id}`);
    },
}
