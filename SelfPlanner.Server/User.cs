namespace SelfPlanner.Server
{
    public class User
    {
        public int UserId { get; set; }
        public string? Auth0_sub { get; set; } = null!;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public List<Todo> Todos { get; set; } = new();
    }
}