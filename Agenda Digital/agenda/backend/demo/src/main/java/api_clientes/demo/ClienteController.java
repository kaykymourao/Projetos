package api_clientes.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ContatoRepository contatoRepository;

    @GetMapping
    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Cliente> addCliente(@RequestBody Cliente cliente){
        Cliente novoCliente = clienteRepository.save(cliente);
        return ResponseEntity.ok(novoCliente);
    }

    @GetMapping("/{id}/contatos")
    public ResponseEntity<List<Contato>> getContatosPorCliente(@PathVariable Long id) {
        Optional<Cliente> cliente = clienteRepository.findById(id);
        return cliente.map(value -> ResponseEntity.ok(contatoRepository.findByClienteId(id))).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> editarCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
    System.out.println("Recebendo PUT para editar cliente com ID: " + id);
    System.out.println("Dados recebidos: " + cliente);

    Optional<Cliente> clienteExistente = clienteRepository.findById(id);
    
    if (!clienteExistente.isPresent()) {
        return ResponseEntity.notFound().build();
    }

    cliente.setId(id.intValue());  
    Cliente clienteAtualizado = clienteRepository.save(cliente);
    return ResponseEntity.ok(clienteAtualizado);
}

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarCliente(@PathVariable Long id) {
    if (clienteRepository.existsById(id)) {
        clienteRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    return ResponseEntity.notFound().build();
    }


}
