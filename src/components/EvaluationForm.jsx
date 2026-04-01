import { useRef } from "react";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import EvaluationModal from "./EvaluationModal";

const evaluationSchema = z.object({
  evaluatorName: z
    .string()
    .min(3, "Le nom doit contenir au minimum 3 caractères"),
  email: z.string().email("Email invalide"),
  rating: z
    .number()
    .min(1, "La note doit être entre 1 et 5")
    .max(5, "La note doit être entre 1 et 5"),
  comment: z
    .string()
    .max(200, "Le commentaire ne peut pas dépasser 200 caractères")
    .optional()
    .or(z.literal("")),
});

export default function EvaluationForm({ characterName }) {
  const modalRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      evaluatorName: "",
      email: "",
      rating: 3,
      comment: "",
    },
    validationSchema: toFormikValidationSchema(evaluationSchema),
    onSubmit: (values) => {
      // Display modal with submitted data
      modalRef.current?.showModal();
      // Reset form after submission
      formik.resetForm();
    },
  });

  const getFieldError = (fieldName) => {
    return formik.touched[fieldName] && formik.errors[fieldName];
  };

  return (
    <>
      <form className="evaluation-form" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="evaluatorName">Nom de l'évaluateur *</label>
          <input
            id="evaluatorName"
            name="evaluatorName"
            type="text"
            {...formik.getFieldProps("evaluatorName")}
            className={getFieldError("evaluatorName") ? "input-error" : ""}
            placeholder="Entrez votre nom"
          />
          {getFieldError("evaluatorName") && (
            <span className="error-text">{getFieldError("evaluatorName")}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            {...formik.getFieldProps("email")}
            className={getFieldError("email") ? "input-error" : ""}
            placeholder="votre@email.com"
          />
          {getFieldError("email") && (
            <span className="error-text">{getFieldError("email")}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="rating">Note (1-5) *</label>
          <select
            id="rating"
            name="rating"
            {...formik.getFieldProps("rating")}
            className={getFieldError("rating") ? "input-error" : ""}
          >
            <option value={1}>1 ⭐</option>
            <option value={2}>2 ⭐⭐</option>
            <option value={3}>3 ⭐⭐⭐</option>
            <option value={4}>4 ⭐⭐⭐⭐</option>
            <option value={5}>5 ⭐⭐⭐⭐⭐</option>
          </select>
          {getFieldError("rating") && (
            <span className="error-text">{getFieldError("rating")}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="comment">Commentaire (max 200 caractères)</label>
          <textarea
            id="comment"
            name="comment"
            {...formik.getFieldProps("comment")}
            className={getFieldError("comment") ? "input-error" : ""}
            placeholder="Partagez votre avis..."
            rows={4}
          />
          <span className="char-count">{formik.values.comment.length}/200</span>
          {getFieldError("comment") && (
            <span className="error-text">{getFieldError("comment")}</span>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Valider
        </button>
      </form>

      <EvaluationModal
        ref={modalRef}
        data={formik.values}
        characterName={characterName}
      />
    </>
  );
}
