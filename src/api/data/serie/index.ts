import api from "api";
import { ISerie } from "interfaces/Serie.interface"

class SerieData {
  index() {
    return api.get<ISerie[]>('serie');
  }
  show(id: number) {
    return api.get<ISerie>(`serie/${id}`);
  }
  store(data: ISerie) {
    return api.post<ISerie>(`serie`, data);
  }
  update(id: number, data: ISerie) {
    return api.put<ISerie>(`serie/${id}`, data);
  }
  delete(id: number) {
    return api.delete<ISerie>(`serie/${id}`);
  }
}

export default new SerieData();
