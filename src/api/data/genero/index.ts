import api from "api";
import { IGenero } from "interfaces/Genero.interface"

class GeneroData {
  index() {
    return api.get<IGenero[]>('genero');
  }
  show(id: number) {
    return api.get<IGenero>(`genero/${id}`);
  }
  store(data: IGenero) {
    return api.post<IGenero>(`genero`, data);
  }
  update(id: number, data: IGenero) {
    return api.put<IGenero>(`genero/${id}`, data);
  }
  delete(id: number) {
    return api.delete<IGenero>(`genero/${id}`);
  }
}

export default new GeneroData();
