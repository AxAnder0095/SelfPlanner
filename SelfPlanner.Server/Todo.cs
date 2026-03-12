namespace SelfPlanner.Server
{
    public class Todo
    {
        public int Id { get; set; }

        public string? Task { get; set; }
        public string? Description { get; set; }

        public bool IsCompleted { get; set; }
        public bool IsPriority { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Foreign key to User
        public int UserId { get; set; }
        public User User { get; set; } = null!;
    }
}