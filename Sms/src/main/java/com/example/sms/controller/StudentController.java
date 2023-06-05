package com.example.sms.controller;

import com.example.sms.model.Student;
import com.example.sms.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/student")
@CrossOrigin("*")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @GetMapping()
    public List<Student> getAllStudent(){
        return studentRepository.findAll();
    }

    @PostMapping()
    public ResponseEntity<?> addStudent(@RequestBody Student st){
        studentRepository.save(st);
        return ResponseEntity.status(HttpStatus.OK).body(st);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateStudent(@PathVariable Integer id, @RequestBody Student st){
        Optional<Student> student = studentRepository.findById(id);
        student.get().setFirstName(st.getFirstName());
        student.get().setEmail(st.getEmail());
        student.get().setLastName(st.getLastName());
        studentRepository.save(student.get());
        return ResponseEntity.ok(student);
    }
    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Integer id){
        studentRepository.deleteById(id);
    }
}
